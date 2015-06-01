#!/usr/bin/env ruby

VERSION = '0.1.0'
puts "Troll.io Build Script #{VERSION}\n==="


# Deps
require 'fileutils'
require 'mkmf'
# require 'pry'

def require_exec(name)
  find_executable(name) or raise RuntimeError.new("#{name} is missing")
end
require_exec('babel')

FileUtils.rm("./mkmf.log")


# Helper fns
def dest_path(src_path)
  File.join($out_path, src_path)
end


# Init
$build_env = ENV['BUILD_ENV'] || 'development'
puts "Build env: #{$build_env}"

time_str = Time.now.strftime("%Y-%m-%d-%H-%M-%S")
case $build_env
when 'development'
  $out_path = "deploy/development"
  FileUtils.rm_rf($out_path)
else
  $out_path = "deploy/build-#{time_str}"
end

puts "Output: #{$out_path}/"
FileUtils.mkdir_p($out_path)


# Copy over everything
FileUtils.cp_r('src/.', $out_path)

# Compile JS to ES6
`babel #{ dest_path('js') } -o #{ dest_path('trollio-compiled.js') }`
FileUtils.rm_rf( dest_path('js') )

# Reload extension in Chrome
if $build_env == 'development'
  `"/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome" http://reload.extensions 2>&1 &`
end

puts "ok"
