export const IMGPROXY_OPTIONS = {
  format_webp: { width: 500, format: 'webp', quality: 75 },
  format_avif: { width: 500, format: 'avif' },
  blur: { width: 500, format: 'webp', blur: 4 },
  watermark_pro: {
    width: 500,
    format: 'avif',
    watermark: {
      opacity: 0.6,
      position: 'soea',
      x_offset: 10,
      y_offset: 10,
      scale: 0.5,
    },
    watermark_text: btoa('<span foreground="white">imgproxy</span>'),
  },
  crop: {
    width: 500,
    format: 'webp',
    crop: { width: 400, height: 250, gravity: { type: 'sm' } },
  },
  sharpen: {
    width: 500,
    format: 'webp',
    sharpen: 2,
  },
  dpr: {
    width: 500,
    format: 'webp',
    dpr: 2,
  },
  gradient_pro: {
    width: 500,
    format: 'webp',
    gradient: {
      opacity: 0.6,
      direction: 'right',
      color: 'dcd0ff',
    },
  },
};

export const formatDay = (date) => {
  return date.toISOString().split('T')[0];
};

export const getDays = () => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() - i);
    dates.push(formatDay(newDate));
  }
  return dates;
};
