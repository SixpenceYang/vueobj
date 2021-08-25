 <template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScrool from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    console.log(this.$refs.wrapper);
    this.scroll = new BScrool(this.$refs.wrapper, {});
  },
};
</script>

<style>
</style>