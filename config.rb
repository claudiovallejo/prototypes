###
# Site Configurations
###

# Pages with no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

###
# Proxies
###

# Prototype #1 Project Details
data.projects.each do |project|
  proxy "prototype1/projects/#{ I18n.transliterate(project.name).downcase.strip.gsub(' ', '-') }/index.html", "prototype1/projects/detail.html", :locals => { :project => project }, :ignore => true
end

# Prototype #2 Project Details
data.projects2.each do |project|
  proxy "prototype2/projects/#{ I18n.transliterate(project.name).downcase.strip.gsub(' ', '-') }/index.html", "prototype2/projects/detail.html", :locals => { :project => project }, :ignore => true
end

# Relative Links & Directory Indexing
activate :directory_indexes
set :relative_links, true

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end
