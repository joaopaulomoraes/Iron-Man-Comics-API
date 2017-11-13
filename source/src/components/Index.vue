<template>
  <div id="index">

    <section
      v-for="d in data"
      :key="d.id"
    >
      <article>
        <img alt="Comic Thumbnail"
          :src="`${d.thumbnail.path}.${d.thumbnail.extension}`"
        >
      </article>
      <aside>
        <header>
          <h1>{{ d.name }}</h1>
        </header>
        {{ d.description }}
      </aside>
    </section>

    <footer>
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
