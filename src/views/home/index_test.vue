<template>
  <div class="home" ref="home">
    <!-- <scroll> -->
    <ul>
      <li>某某1</li>
      <li>某某2</li>
      <li>某某3</li>
      <li>某某4</li>
      <li>某某5</li>
      <li>某某6</li>
      <li>某某7</li>
      <li>某某8</li>
      <li>某某9</li>
      <li>某某10</li>
      <li>某某11</li>
      <li>某某12</li>
      <li>某某13</li>
      <li>某某14</li>
      <li>某某15</li>
      <li>某某16</li>
      <li>某某17</li>
      <li>某某18</li>
      <li>某某19</li>
      <li>某某20</li>
      <li>某某21</li>
      <li>某某22</li>
      <li>某某23</li>
      <li>某某24</li>
      <li>某某25</li>
      <li>某某26</li>
      <li>某某27</li>
      <li>某某28</li>
      <li>某某29</li>
      <li>某某30</li>
      <li>某某31</li>
      <li>某某32</li>
      <li>某某33</li>
      <li>某某34</li>
      <li>某某35</li>
      <li>某某36</li>
      <li>某某37</li>
      <li>某某38</li>
      <li>某某39</li>
      <li>某某40</li>
      <li>某某41</li>
      <li>某某42</li>
      <li>某某43</li>
      <li>某某44</li>
      <li>某某45</li>
      <li>某某46</li>
      <li>某某47</li>
      <li>某某48</li>
      <li>某某49</li>
      <li>某某50</li>
      <li>某某51</li>
      <li>某某52</li>
      <li>某某53</li>
      <li>某某54</li>
      <li>某某55</li>
      <li>某某56</li>
      <li>某某57</li>
      <li>某某58</li>
      <li>某某59</li>
      <li>某某60</li>
      <li>某某61</li>
      <li>某某62</li>
      <li>某某63</li>
      <li>某某64</li>
      <li>某某65</li>
      <li>某某66</li>
      <li>某某67</li>
      <li>某某68</li>
      <li>某某69</li>
      <li>某某70</li>
      <li>某某71</li>
      <li>某某72</li>
      <li>某某73</li>
      <li>某某74</li>
      <li>某某75</li>
      <li>某某76</li>
      <li>某某77</li>
      <li>某某78</li>
      <li>某某79</li>
      <li>某某80</li>
      <li>某某81</li>
      <li>某某82</li>
      <li>某某83</li>
      <li>某某84</li>
      <li>某某85</li>
      <li>某某86</li>
      <li>某某87</li>
      <li>某某88</li>
      <li>某某89</li>
      <li>某某90</li>
      <li>某某91</li>
      <li>某某92</li>
      <li>某某93</li>
      <li>某某94</li>
      <li>某某95</li>
      <li>某某96</li>
      <li>某某97</li>
      <li>某某98</li>
      <li>某某99</li>
      <li>某某100</li>
    </ul>
    <!-- </scroll> -->
  </div>
</template>

<script>
import scroll from "../components/scroll";
import BScroll  from 'better-scroll';

export default {
  components: { 
    scroll 
  },
  data() {
    return {
    
    };
  },
  methods: {
   
  },
  mounted() {
    // 默认情况下是不会实时监听滚动位置
    // probeType 0 和 1 不侦测滚动位置
    // probeType 2 是在手指滚动的过程中侦测，离开后的惯性中不侦测
    // probeType 3 只要是滚动，都会 侦测
    const bscoll = new BScroll(this.$refs.home, {
      probeType: 2,
      pullUpLoad: true,
    })
    bscoll.on('scroll', (position)=>{
      // console.log(position);
    })
     bscoll.on('pullingUp', ()=>{
      console.log('加载更多');
      // 等数据请求完，并且将新的数据添加展示出来后
      setTimeout(() => {
        bscoll.finishPullUp()
      }, 2000);
    })
  },
};
</script>

<style scoped lang="scss">
.home{
  height: 500px;
  overflow: hidden;
}
</style>