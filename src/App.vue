<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <h1 class="text-2xl font-bold mb-4">在线简历生成器</h1>
    <FormPage />
    <button @click="exportPDF" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">导出 PDF</button>
    <div id="resume" class="mt-8 bg-white p-4 shadow">
      <ResumePreview />
    </div>
  </div>
</template>

<script setup>
import FormPage from './pages/FormPage.vue'
import ResumePreview from './components/ResumePreview.vue'
import html2pdf from 'html2pdf.js'

const exportPDF = () => {
  const element = document.getElementById('resume')
  html2pdf().from(element).save('简历.pdf')
}
</script>
