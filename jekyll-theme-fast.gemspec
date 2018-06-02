Gem::Specification.new do |s|
    s.name     = 'jekyll-theme-fast'
    s.version  = '0.1.4'
    s.license  = 'MIT'
    s.summary  = 'High Performance Web Sites'
    s.author   = 'liurongqing'
    s.email    = 'phpgege@gmail.com'
    s.homepage = 'https://github.com/liurongqing/jekyll-theme-fast'
    s.files    = `git ls-files -z`.split("\x0").grep(%r{^(_sass|_includes|_layouts|assets)/})
  end
