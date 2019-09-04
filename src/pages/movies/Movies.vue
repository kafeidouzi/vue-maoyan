<template>
    <div class="movies-container"> 
        <nav>
        <ul>
            <li>
              北京
              <span class="yo-ico"></span>
            </li>
            <li>
                <ul>
                    <!-- <li class="active">正在热映</li>
                    <li>即将上映</li> -->
                    <router-link active-class="active" tag="li" to="/movies/hotmovies">正在热映</router-link>
                     <router-link active-class="active" tag="li" to="/movies/comingmovies">即将上映</router-link>
                </ul>
            </li>
            <li><van-icon name="search"  color="#e54847" size=".25rem"/></li>
        </ul>
    </nav>
    <section>
        <router-view></router-view>
    </section>
    </div>
    
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
    
}
</script>


<style lang="stylus" scoped>
@import '~styles/border.styl'

.movies-container
    display flex
    flex-direction column
    height 100%
    nav
        height .44rem
        position static
        border1px(0 0 1px 0)
        >ul
            height 100%
            display flex
            >li
                &:nth-child(1)
                    flex 1
                    display flex
                    justify-content center
                    align-items  center
                    color #666
                    font-size .15rem
                    span
                        font-size .12rem 
                        &::after
                            content '\f033'
                &:nth-child(2)
                    flex 3
                    ul
                        display flex
                        justify-content center
                        align-items center
                        li
                            flex 1
                            line-height .44rem
                            text-align center
                            margin 0  .10rem
                            color #666
                            font-size .15rem
                            font-weight 700
                            &.active
                                border-bottom #e54847 2px solid
                                color #e54847
                                height .44rem
                &:nth-child(3)
                    flex 1
                    display flex
                    justify-content center
                    align-items center
    section 
        flex 1
        overflow hidden
>>> .tab-content .list-wrap .item
    padding-right .15rem !important



</style>    
