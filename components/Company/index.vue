<template>
  <Page>
    <h2>Transporte de motos é o nosso negócio!</h2>
    <p class="company-description">
      Somos a solução definitiva quando o assunto é o transporte de
      motocicletas.
      <strong>Socorro 24 horas,</strong>
      com segurança, qualidade, e atendimento imediato em toda área de
      <strong>Cascavel</strong>
      e região.
    </p>

    <div class="company-cards">
      <div class="company-card">
        <h3>Assistência</h3>
        <p>
          Serviço de guincho 24h para motos, fazemos a remoção de sua moto a
          qualquer hora do dia ou da noite, um transporte feito com segurança
          rapidez e profissionalismo.
        </p>
      </div>
      <div class="company-card">
        <h3>Como pagar pelo seu guincho de moto?</h3>
        <p>
          Aceitamos as maiores formas de pagamento para nossos serviços de moto
          guincho: dinheiro, cartões de crédito e débito e PIX.
        </p>
      </div>
      <div class="company-card">
        <h3>Serviços de guincho e transporte</h3>
        <p>
          Levamos e trazemos sua moto para: revisões, vistorias, lavagem, etc.
          Serviço prestado para Cascavel e região.
        </p>
      </div>
      <div class="company-card">
        <h3>Dúvidas e sugestões</h3>
        <p>
          Caso possua dúvidas, críticas e sugestões, entre em contato conosco,
          nós agradecemos! Sua opinião é muito importante.
        </p>
      </div>
    </div>
  </Page>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#company {
  background: $ice;
}
.company-description {
  text-align: center;
}
.company-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
  margin-top: 20px;

  @media (max-width: $mobileBreakpoint) {
    grid-template-columns: 1fr;
  }
}
.company-card {
  border: 1px solid $gray;
  border-radius: 4px;
  padding: 0 15px 5px 15px;
}
.company-card h3 {
  color: $red;
}
</style>
