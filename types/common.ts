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
