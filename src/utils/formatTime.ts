const SEC_IN_MIN = 60;

export const formatTime = (
  time: number,
  type: 'full' | 'onlySecond' = 'full'
) => {
  const sec = Math.floor(time / 1000);

  if (type === 'onlySecond') {
    return `${sec} `;
  }

  const Os = (sec % SEC_IN_MIN).toString().padStart(2, '0');

  const m = Math.floor(sec / SEC_IN_MIN);

  if (m) {
    return `${m}:${Os} `;
  }

  return `0:${Os} `;
};
