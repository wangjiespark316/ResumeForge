<template>
  <div class="space-y-4">
    <div>
      <h2 class="text-xl font-bold">{{ resume.name }}</h2>
      <p>{{ resume.email }} | {{ resume.phone }}</p>
    </div>

    <div>
      <h3 class="text-lg font-semibold">教育经历</h3>
      <ul>
        <li v-for="edu in resume.education" :key="edu.school">
          <strong>{{ edu.school }}</strong> - {{ edu.major }}（{{ edu.date }}）
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold">项目经验</h3>
      <ul>
        <li v-for="proj in resume.projects" :key="proj.name">
          <strong>{{ proj.name }}</strong>（{{ proj.date }}）<br />
          技术：{{ proj.stack }}<br />
          描述：{{ proj.desc }}
        </li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold">技能</h3>
      <p>{{ resume.skills }}</p>
    </div>
  </div>
</template>

<script setup>
import { useResumeStore } from '@/store/resume'
const resume = useResumeStore()
</script>
