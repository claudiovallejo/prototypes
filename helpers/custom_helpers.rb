module CustomHelpers
  # Pretty URL: prepares text for url
  def purl text
    url = I18n.transliterate(text).downcase.strip.gsub(' ', '-')
  end
  # Pretty Numbers: prepares numbers for hrefs
  def pnum cel
    number = cel.gsub(' ', '').gsub('(', '').gsub(')', '')
  end
  # Project Index: fetches project index value
  def project_index name
    i = 0
    data.projects.each do |project|
      break if name === project.name
      if name != project.name
        i = i + 1
      end
    end
    i
  end
  # Other Projects: fetches the next two projects from the project database
  def other_projects i
    others = []
    projects = data.projects
    a = ""
    b = ""
    if i === projects.length - 2
      a = projects[projects.length]
      b = projects[0]
    elsif i === projects.length - 1
      a = projects[0]
      b = projects[1]
    else
      a = projects[i + 1]
      b = projects[i + 2]
    end
    others += [a, b]
  end
end
