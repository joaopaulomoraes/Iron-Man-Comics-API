<template>
  <div id="index">

    <section class="wrapper"
      v-for="d in data"
      :key="d.id"
    >
      <article class="main">
        <img alt="Comic Thumbnail" class="fullwidth"
          :src="`${d.thumbnail.path}.${d.thumbnail.extension}`"
        >
      </article>
      <aside class="aside upper-text">
        <header>
          <h1 class="welcome">{{ d.name }}</h1>
        </header>
        {{ d.description }}
      </aside>
    </section>

    <router-link :to="'/comics'">
      <button class="next-action"></button>
    </router-link>

    <footer class="footer">
      {{ results.attributionText }}
    </footer>

  </div>
</template>

<script>
import Request from '@/modules/request'
import comicLook from '@/assets/img/comic-look.jpg'
import comicFly from '@/assets/img/comic-fly.jpg'

export default {
  name: 'Index',
  data () {
    return {
      data: [],
      results: ''
    }
  },

  metaInfo: {
    title: 'Iron Man',
    titleTemplate: '%s - Welcome',
    htmlAttrs: {
      lang: 'en'
    }
  },

  methods: {
    callComics () {
      Request.get('characters/1009368')
      .then(response => {
        this.results = response.data
        this.data = this.results.data.results
      })
      .catch(e => {})
    },

    thumbnailChange () {
      jQuery('.next-action')
        .hover(function () {
          $('img.fullwidth').attr('src', comicLook)
        })
          .mouseout(function () {
            $('img.fullwidth').attr('src', comicFly)
          })
    }
  },

  mounted () {
    this.callComics()
    this.thumbnailChange()
  }
}
</script>
