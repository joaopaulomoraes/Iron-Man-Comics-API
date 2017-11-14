<template>
  <div id="individual-comic">
    
    <section class="wrapper container"
      v-for="r in results"
      :key="r.id"
    >
      <article class="main">
        <img alt="Comic Thumbnail" class="comics"
          :src="`${r.thumbnail.path}.${r.thumbnail.extension}`"
        >
      </article>
      <aside class="aside">
        <header>
          <h2>{{ r.title }}</h2>
        </header>
        {{ r.description }}

        <div class="spacer"></div>
        
        <aside
          v-for="d in r.dates"
          :key="d.id"
        >
          <b>{{ d.type }}:</b> {{ formatDate(d.date) }}
        </aside>
        <aside
          v-for="p in r.prices"
          :key="p.id"
        >
          <b>Price:</b> {{ p.price }}
        </aside>
        
        <div class="spacer"></div>

        <b>Creators:</b>
        <aside class="inline"
          v-for="cr in r.creators.items"
          :key="cr.id"
        >
          {{ cr.name }} ({{ cr.role }})
        </aside>

        <div class="spacer"></div>
        
        <b>Stories:</b>
        <aside class="inline"
          v-for="s in r.stories.items"
          :key="s.id"
        >
          {{ s.name }} ({{ s.type }})
        </aside>
      </aside>
    </section>

    <router-link :to="'/comics'">
      <button class="back-action"></button>
    </router-link>

    <router-link :to="'/'">
      <button class="next-action"></button>
    </router-link>

    <footer class="footer">
      {{ data.attributionText }}
    </footer>

  </div>
</template>

<script>
import Request from '@/modules/request'
import moment from 'moment'

export default {
  name: 'IndividualComic',
  data () {
    return {
      data: [],
      results: []
    }
  },

  metaInfo: {
    title: 'Iron Man',
    titleTemplate: '%s - Individual Comic',
    htmlAttrs: {
      lang: 'en'
    }
  },

  methods: {
    formatDate (date) {
      return moment(date).format('ll')
    }
  },

  mounted () {
    Request.get('comics/' + this.$route.params.id)
    .then(response => {
      this.data = response.data
      this.results =
        this.data.data.results
    }, response => {})
  }
}
</script>
