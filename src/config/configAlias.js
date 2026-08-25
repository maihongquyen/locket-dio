// configAlias.js
import { CONFIG } from "@/config/webConfig";

// Config cho Moments
export const MOMENTS_CONFIG = {
  maxDisplayLimit: CONFIG.app.moments.maxDisplayLimit,
  duplicateThreshold: CONFIG.app.moments.duplicateThreshold,
  initialVisible: CONFIG.app.moments.initialVisible,
  loadMoreLimit: CONFIG.app.moments.loadMoreLimit,
};

// Config cho Messages
export const MESSAGES_CONFIG = {
  maxDisplayLimit: CONFIG.app.messages.maxDisplayLimit,
  initialVisible: CONFIG.app.messages.initialVisible,
  loadMoreLimit: CONFIG.app.messages.loadMoreLimit,
};

// Config cho Camera
export const CAMERA_CONFIG = {
  maxRecordTime: CONFIG.app.camera.limits.maxRecordTime,
  imageSizePx: CONFIG.app.camera.resolutions.imageSizePx,
  videoResolutionPx: CONFIG.app.camera.resolutions.videoResolutionPx,
  maxImageSizeMB: CONFIG.app.camera.limits.maxImageSizeMB,
  maxVideoSizeMB: CONFIG.app.camera.limits.maxVideoSizeMB,
};

export const COMMUNITY_CONFIG = {
  website: CONFIG.app.community.website,
  discord: CONFIG.app.community.discord,
  messenger: CONFIG.app.community.messenger,
  telegram: CONFIG.app.community.telegram,
  telegramChannel: CONFIG.app.community.telegramChannel,
  github: CONFIG.app.community.github,
  facebook: CONFIG.app.community.facebook,
  youtube: CONFIG.app.community.youtube,
  issues: CONFIG.app.community.issues,
};

export const CONTACT_CONFIG = {
  supportEmail: CONFIG.app.contact.supportEmail,
  website: CONFIG.app.contact.website,
  github: CONFIG.app.contact.github,
  facebook: CONFIG.app.contact.facebook,
  youtube: CONFIG.app.contact.youtube,
  telegram: CONFIG.app.contact.telegram,
  telegramChannel: CONFIG.app.contact.telegramChannel,
  discord: CONFIG.app.contact.discord,
  issues: CONFIG.app.contact.issues,
};

export const MYBANK_CONFIG = {
  bankCode: CONFIG.app.bankInfo.bankCode,
  urlImg: CONFIG.app.bankInfo.urlImg,
  bankShortname: CONFIG.app.bankInfo.short_name,
  bankName: CONFIG.app.bankInfo.bankName,
  accountNumber: CONFIG.app.bankInfo.accountNumber,
  accountName: CONFIG.app.bankInfo.accountName,
};

export const SPONSORS_CONFIG = {
  accountName: CONFIG.app.sponsors.accountName,
  accountNumber: CONFIG.app.sponsors.accountNumber,
  urlImg: CONFIG.app.sponsors.urlImg,
  bankName: CONFIG.app.sponsors.bankName,
};

export const EMBEDVIDEO_CONFIG = {
  embedIos: CONFIG.app.videoTutorials.iosAddscreen,
  embedAndroid: CONFIG.app.videoTutorials.androidAddscreen,
};

export const CACHE_CONFIG = {
  keys: CONFIG.cache.keys,
  ttls: CONFIG.cache.ttl,
};
