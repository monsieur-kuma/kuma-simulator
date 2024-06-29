/* global chrome */
const ID = 'jnjifnfegodjnliblglcbmmldgcienei';

export const sendData = (action: string, data = {}) =>
  new Promise((resolve) => {
    if (chrome?.runtime?.sendMessage) {
      chrome.runtime.sendMessage(
        ID,
        {
          action,
          data,
        },
        (res) => {
          resolve(res);
        },
      );
    } else resolve('Chrome not found');
  });
