<template>
  <div class="space-y-4">
    <InputSection label="姓名" v-model="resume.name" placeholder="请输入姓名" />
    <InputSection label="邮箱" v-model="resume.email" placeholder="请输入邮箱" />
    <InputSection label="电话" v-model="resume.phone" placeholder="请输入手机号" />

    <div>
      <h2 class="font-bold mt-4 mb-2">教育经历</h2>
      <div v-for="(edu, index) in resume.education" :key="index" class="space-y-2">
        <InputSection label="学校" v-model="edu.school" placeholder="请输入学校名称" />
        <InputSection label="专业" v-model="edu.major" placeholder="请输入所学专业" />
        <InputSection label="时间" v-model="edu.date" placeholder="例如 2019-2023" />
      </div>
      <button @click="addEducation" class="text-sm text-blue-600 mt-2">+ 添加教育经历</button>
    </div>

    <div>
      <h2 class="font-bold mt-4 mb-2">项目经验</h2>
      <div v-for="(proj, index) in resume.projects" :key="index" class="space-y-2">
        <InputSection label="项目名称" v-model="proj.name" placeholder="请输入项目名" />
        <InputSection label="项目描述" v-model="proj.desc" placeholder="简要描述项目内容" />
        <InputSection label="使用技术" v-model="proj.stack" placeholder="如 Vue, Node.js" />
        <InputSection label="时间" v-model="proj.date" placeholder="例如 2024" />
      </div>
      <button @click="addProject" class="text-sm text-blue-600 mt-2">+ 添加项目经验</button>
    </div>

    <div>
      <h2 class="font-bold mt-4 mb-2">技能</h2>
      <InputSection label="技能" v-model="resume.skills" placeholder="请输入你的技能，如 Vue, TypeScript" />
    </div>
  </div>
</template>

<script setup>
import { useResumeStore } from '@/store/resume'
import InputSection from '@/components/InputSection.vue'

const resume = useResumeStore()

const addEducation = () => {
  resume.education.push({ school: '', major: '', date: '' })
}

const addProject = () => {
  resume.projects.push({ name: '', desc: '', stack: '', date: '' })
}
</script>
