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
          <h1>{{ d.name }}</h1>
        </header>
        {{ d.description }}
      </aside>
    </section>

    <footer class="footer">
      {{ results.attributionText }}
    </footer>

  </div>
</template>

<script>
import Request from '@/modules/request'

export default {
  name: 'Index',
  data () {
    return {
      data: [],
      results: ''
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
    }
  },

  mounted () {
    this.callComics()
  }
}
</script>
