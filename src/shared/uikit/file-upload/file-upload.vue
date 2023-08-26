<script setup lang="ts">
import { ref, reactive } from "vue"
import { Icon } from "@/shared/uikit/icons"
import { ButtonIcon } from "../buttons"

interface FileUploadProps {
  name: string
  id: string
  maxSize: number
  accept: string
}

interface FileData {
  name: string
  size: number
  type: string
  fileExtention: string
  url: string
  isImage: boolean
  isUploaded: boolean
}

interface Errors {
  data: string[]
}

const props = withDefaults(defineProps<FileUploadProps>(), {
  maxSize: 1,
  accept: "png, jpg, jpeg, svg, webp"
})

// Variables
const isLoading = ref<boolean>(false)
const uploadReady = ref<boolean>(true)

const file = ref<FileData>({
  name: "",
  size: 0,
  type: "",
  fileExtention: "",
  url: "",
  isImage: false,
  isUploaded: false
})
const errors = reactive<Errors>({ data: [] })

// Methods
function handleFileChange(e: HTMLInputElement) {
  errors.data = []
  // Check if file is selected
  if (e.files && e.files[0]) {
    // Check if file is valid
    if (isFileValid(e.files[0])) {
      console.log(e.files[0])
      // Get uploaded file
      const _file = e.files[0],
        // Get file size
        fileSize = Math.round((_file.size / 1024 / 1024) * 100) / 100,
        // Get file extension
        fileExtention = _file.name.split(".").pop() as string,
        // Get file name
        fileName = _file.name.split(".").shift() as string,
        // Check if file is an image
        isImage = ["jpg", "jpeg", "png", "gif"].includes(fileExtention)
      // Print to console
      console.log(fileSize, fileExtention, fileName, isImage)
      let fileReader = new FileReader()
      fileReader.addEventListener(
        "load",
        () => {
          file.value = {
            name: fileName,
            size: fileSize,
            type: _file.type,
            fileExtention: fileExtention,
            isImage: isImage,
            url: fileReader.result as string,
            isUploaded: true
          }
          console.log(fileReader)
        },
        false
      )
      fileReader.readAsDataURL(_file)
    } else {
      console.log("Некорректный файл")
    }
  }
}

function isFileSizeValid(fileSize: number) {
  if (fileSize <= props.maxSize) {
    return true
  } else {
    errors.data.push(`Размер файла должен быть меньше ${props.maxSize} MB`)
  }
}

function isFileTypeValid(fileExtention: string) {
  if (props.accept.split(",").includes(fileExtention)) {
    return true
  } else {
    errors.data.push(`Файл должен быть формата ${props.accept}`)
  }
}

function isFileValid(file: File) {
  isFileSizeValid(Math.round((file.size / 1024 / 1024) * 100) / 100)
  isFileTypeValid(file.name.split(".").pop() as string)
  if (errors.data.length === 0) {
    return true
  } else {
    return false
  }
}
</script>

<template>
  <div class="file-upload">
    <div class="file-upload__area">
      <input
        class="file-upload__input"
        type="file"
        :name="props.name"
        :id="props.id"
        @change="handleFileChange($event.target as HTMLInputElement)"
      />
      <label class="file-upload__label" :for="props.id">
        <div class="file-upload__icon">
          <Icon name="paperclip" type="common" :h="24" :w="24" />
        </div>
        <div class="file-upload__text">Прикрепить изображение</div>
      </label>
      <template v-if="errors.data.length > 0">
        <div class="file-upload__errors" v-for="(error, index) in errors.data" :key="index">
          <span>{{ error }}</span>
        </div>
      </template>
    </div>
    <div class="file-upload__images" v-if="file.isUploaded">
      <div class="file-upload__img">
        <img :src="file.url" v-if="file.isImage" class="file-image" alt="" />
        <ButtonIcon
          class="file-upload__delete-img"
          name="close"
          type="common"
          :w="16"
          :h="16"
          size="extrasmall"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.file-upload {
  @apply max-w-[100%] relative text-left;
  &__area {
    & ~ .file-upload__images {
      @apply mt-[28px];
    }
  }
  &__input {
    @apply w-0 h-0 opacity-0 absolute z-[-1];
  }
  &__label {
    @apply flex items-center cursor-pointer max-h-[32px];
  }
  &__text {
    @apply text-primary-color text-[16px] font-normal leading-[150%] ml-[8px];
  }
  &__errors {
    @apply mt-[8px] text-error-500;
  }
  &__images {
    @apply flex items-center;
  }
  &__img {
    @apply max-w-[112px] max-h-[112px] min-w-[112px] min-h-[112px] relative;
    .file-image {
      @apply w-full max-h-[112px] min-h-[112px] object-cover rounded-default;
    }
  }
  &__delete-img {
    @apply rounded-full absolute top-[-8px] right-[-8px] outline outline-[3px] outline-white stroke-white;
  }
}
</style>
