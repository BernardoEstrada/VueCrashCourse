import{p as e,b as s,o as t,a,F as o,f as n,g as d,t as c,d as i,w as l,r,c as p}from"./vendor.2523a2e4.js";import{C as m}from"./Card.168eaca0.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";/* empty css              */const h={components:{Card:m},props:{pokemons:{type:Array,default:[]},selectedId:{type:Number}},methods:{click(e){this.$emit("chosen",e)}}},k=l("data-v-2f2a079e");e("data-v-2f2a079e");const f={class:"cards"};s();const v=[1,4,7],y={components:{PokemonCards:u(h,[["render",k(((e,s,l,p,m,u)=>{const h=r("card");return t(),a("div",f,[(t(!0),a(o,null,n(l.pokemons,(e=>(t(),a(h,{key:e.id,onClick:s=>u.click(e),class:[{opace:l.selectedId&&e.id!==l.selectedId},"card"]},{title:k((()=>[d(c(e.name)+" #"+c(e.id),1)])),content:k((()=>[i("img",{src:e.sprite},null,8,["src"])])),description:k((()=>[(t(!0),a(o,null,n(e.types,(e=>(t(),a("div",{key:e},c(e),1)))),128))])),_:2},1032,["onClick","class"])))),128))])}))],["__scopeId","data-v-2f2a079e"]])},data:()=>({pokemons:[],evolutions:[],selectedId:null}),async created(){this.pokemons=await this.fetchData(v)},methods:{async fetchData(e){const s=await Promise.all(e.map((e=>window.fetch(`https://pokeapi.co/api/v2/pokemon/${e}`))));return(await Promise.all(s.map((e=>e.json())))).map((e=>({name:e.name,id:e.id,sprite:e.sprites.other["official-artwork"].front_default,types:e.types.map((e=>e.type.name))})))},async fetchEvolutions(e){if(this.selectedId===e.id)return this.selectedId=null,void(this.evolutions=[]);this.evolutions=await this.fetchData([e.id+1,e.id+2]),this.selectedId=e.id}}},I=l("data-v-4cb54cd1");e("data-v-4cb54cd1");const w=i("br",null,null,-1);s();p(u(y,[["render",I(((e,s,n,d,c,l)=>{const p=r("pokemon-cards");return t(),a(o,null,[i(p,{pokemons:c.pokemons,selectedId:c.selectedId,onChosen:l.fetchEvolutions},null,8,["pokemons","selectedId","onChosen"]),w,i(p,{pokemons:c.evolutions},null,8,["pokemons"])],64)}))],["__scopeId","data-v-4cb54cd1"]])).mount("#app");
