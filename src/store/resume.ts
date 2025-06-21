import { defineStore } from 'pinia'

export const useResumeStore = defineStore('resume', {
  state: () => ({
    name: '',
    email: '',
    phone: '',
    education: [
      { school: '', major: '', date: '' }
    ],
    projects: [
      { name: '', desc: '', stack: '', date: '' }
    ],
    skills: ''
  })
})
