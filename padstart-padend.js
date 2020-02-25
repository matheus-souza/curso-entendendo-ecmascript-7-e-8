const profissoes = [
    'desenvolvedor',
    'engenheiro',
    'jornalista',
    'arquiteto',
    'médico'
];

profissoes.forEach(profissao => {
    console.log(profissao);
});

profissoes.forEach(profissao => {
    console.log(profissao.padStart(13, '*'))
});

profissoes.forEach(profissao => {
    console.log(profissao.padEnd(13, '*'))
});