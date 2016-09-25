module CustomHelpers
  # Pretty URL: prepares text for url
  def purl text
    url = I18n.transliterate(text).downcase.strip.gsub(' ', '-')
  end
  # Pretty Numbers: prepares numbers for hrefs
  def pnum cel
    number = cel.gsub(' ', '').gsub('(', '').gsub(')', '')
  end
end
