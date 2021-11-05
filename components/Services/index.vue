<template>
  <Page id="services">
    <h2>Serviços</h2>
    <div class="services-cards">
      <ServiceCard
        icon="cog"
        title="Pane mecânica"
        description="Enviamos sua moto para a oficina da sua escolha com rapidez e eficiência."
      />
      <ServiceCard
        icon="gas-station"
        title="Pane seca"
        description="Em caso de pane seca, vamos até seu local, levando sua moto no posto mais próximo ou no de sua preferência."
      />
      <ServiceCard
        icon="battery-charging-10"
        title="Pane elétrica"
        description="Esqueceu o som ligado, a porta aberta, ou farol ligado?. Vamos até o local com auxiliar de partida, fazendo por exemplo uma recarga na bateria."
      />
      <ServiceCard
        icon="tow-truck"
        title="Transporte"
        description="Revisões, vistorias, eventos, lavagem, não importa. Fazemos o transporte da sua moto onde precisar."
      />
    </div>
  </Page>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";

export default {
  components: {
    ServiceCard,
  },
};
</script>

<style scoped lang="scss">
#services {
  background: $red;
  color: $white;
}
.services-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
  margin-top: 20px;

  @media (max-width: $mobileBreakpoint) {
    grid-template-columns: 1fr;
  }
}
</style>
