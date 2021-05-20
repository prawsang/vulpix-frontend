export interface Application {
  identifier: string
  name: string
  devName: string
  iconUrl: string
  categorySlug: string
}

export interface Category {
  slug: string
  name: string
}

export interface Result {
  id: number
  applicationId: string
  version: string
  androidVersion: string
  error?: string
  vulpixScore: number
  testingMethod: string
  advertiserId: boolean
  androidId: boolean
  deviceSerialNumber: boolean
  googleServicesId: boolean
  imei: boolean
  macAddress: boolean
  cellId: boolean
  simSerialNumber: boolean
  imsi: boolean
  localAreaCode: boolean
  phoneNumber: boolean
  age: boolean
  audioRecording: boolean
  calendar: boolean
  contactBook: boolean
  country: boolean
  ccv: boolean
  dob: boolean
  email: boolean
  gender: boolean
  name: boolean
  password: boolean
  photo: boolean
  physicalAddress: boolean
  relationshipStatus: boolean
  sms: boolean
  ssn: boolean
  timezone: boolean
  username: boolean
  video: boolean
  webBrowsingLog: boolean
  gps: boolean
}

export const criterionMap = {
  advertiserId: 'Advertiser ID',
  androidId: 'Android ID',
  deviceSerialNumber: 'Device Serial Number',
  googleServicesId: 'Google Services Framework ID',
  imei: 'IMEI',
  macAddress: 'MAC Address',
  cellId: 'Cell ID',
  simSerialNumber: 'ICCID/SIM Serial Number',
  imsi: 'IMSI',
  localAreaCode: 'Local Area Code',
  phoneNumber: 'Phone Number',
  age: 'Age',
  audioRecording: 'Audio Recordings',
  calendar: 'Calendar',
  contactBook: 'Contacts',
  country: 'Country',
  ccv: 'CVV',
  dob: 'Date of Birth',
  email: 'Email',
  gender: 'Gender',
  name: 'Name',
  password: 'Password',
  photo: 'Photo',
  physicalAddress: 'Physical Address',
  relationshipStatus: 'Relationship Status',
  sms: 'SMS Messages',
  ssn: 'SSN',
  timezone: 'Timezone',
  username: 'Username',
  video: 'Video',
  webBrowsingLog: 'Web Browsing Log',
  gps: 'GPS (Latitude, Longitude)',
}

export const TESTING_METHOD = {
  OLD: 'OLD',
  STATIC_ONLY: 'STATIC_ONLY',
  DYNAMIC_ONLY: 'DYNAMIC_ONLY',
  COMPLETE: 'COMPLETE',
}
