module CustomHelpers
  ###
  # Universal Helpers
  ###

  # Pretty URL: prepares text for url
  def purl text
    url = I18n.transliterate(text).downcase.strip.gsub(' ', '-')
  end
  # Pretty Numbers: prepares numbers for hrefs
  def pnum cel
    number = cel.gsub(' ', '').gsub('(', '').gsub(')', '')
  end

  ###
  # Prototype #1 Helpers
  ###

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
      a = projects[projects.length - 1]
      b = projects[0]
    elsif i === projects.length - 1
      a = projects[0]
      b = projects[1]
    else
      a = projects[i + 1]
      b = projects[i + 2]
    end
    others.push(a)
    others.push(b)
    others
  end

  ###
  # Prototype #2 Helpers
  ###

  # Project2 Index: fetches project index value
  def project2_index name
    i = 0
    data.projects2.each do |project|
      break if name === project.name
      if name != project.name
        i = i + 1
      end
    end
    i
  end

  # Next Project: fetches the new project from the project database
  def next_project i
    projects = data.projects2
    if i === projects.length - 1
      project = projects[0]
    else
      project = projects[i + 1]
    end
    project
  end

  ###
  # Prototype #3 Helpers
  ###

  # Project3 Index: fetches project index value
  def project3_index name
    i = 0
    data.projects3.each do |project|
      break if name === project.name
      if name != project.name
        i = i + 1
      end
    end
    i
  end

  # Next Project: fetches the new project from the project database
  def next_project i
    next_project = ""
    projects = data.projects3
    if i === projects.length - 1
      next_project = projects[0]
    else
      next_project = projects[i + 1]
    end
    next_project
  end

end
