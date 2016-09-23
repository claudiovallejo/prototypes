module CustomHelpers
  # Pretty URL: prepares text for url
  def purl text
    url = I18n.transliterate(text).downcase.strip.gsub(' ', '-')
  end
end
