<template>
  <div id="comics">

    <section class="wrapper container"
      v-for="r in results"
      :key="r.id"
    >
      <article class="main">
        <router-link :to="getComicId(r.resourceURI)">
          <img alt="Comic Thumbnail" class="comics"
            :src="`${r.thumbnail.path}.${r.thumbnail.extension}`"
          >
        </router-link>
      </article>
      <aside class="aside">
        <header>
          <h2>
            {{ r.title }}
          </h2>
        </header>
        {{ r.description }}
        <p>
          <b>FOC Date:</b> {{ formatDate(r.dates[1].date) }}
        </p>
      </aside>
    </section>

    <infinite-loading @infinite="comicsRequest" spinner="spiral">
    </infinite-loading>

    <router-link :to="'/'">
      <button class="back-action"></button>
    </router-link>

    <footer class="footer">
      {{ list.attributionText }}
    </footer>

  </div>
</template>

<script>
import Request from '@/modules/request'
import moment from 'moment'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'Comics',
  data () {
    return {
      list: [],
      results: [],
      limit: 5,
      count: 0
    }
  },

  metaInfo: {
    title: 'Iron Man',
    titleTemplate: '%s - Comics',
    htmlAttrs: {
      lang: 'en'
    }
  },

  components: { InfiniteLoading },

  methods: {
    comicsRequest ($state) {
      Request.get('characters/1009368/comics', {
        params: {
          limit: this.limit,
          offset: this.limit * this.count,
          orderBy: '-focDate'
        }
      })
      .then(({ data }) => {
        this.list = data

        if (this.list.data.results.length) {
          this.results = this.results.concat(this.list.data.results)
          $state.loaded()
        }

        this.count ++
      })
    },

    formatDate (date) {
      return moment(date).format('ll')
    },

    getComicId (url) {
      let id = url.split('/')
      return 'comic/' + id[6]
    }
  }
}
</script>
