---
title: Aprendendo Testes e TDD com PHP e Laravel
tag: tdd, php, laravel
---
Sempre achei testes uma coisa meio redundante (o que na verdade é uma coisa boa né?), mas agora resolvi aprender, juntamente com TDD - Test Driven Development.
<!--more-->
Quando dizia redundante, dizia no sentido de perda de tempo. Pra quê vou fazer um código que vai testar se o programa faz o que eu mesmo pedi pra ele fazer, entende? Haha... Obviamente há muitas coisas envolvidas pra que um código que você mesmo fez <span class="font-bold">não faça</span> o que você queria que ele fizesse. A mais simples é um erro de digitação.

A real é que meu maior impeditivo pra aprender testes não era por que testar, mas o quê e como testar. E "como", não é a parte técnica, mas a ideia, a lógica por trás do teste. 

Daí entra o TDD. Acho que ele ajuda bastante nesse aspecto. 

E nisso, outra coisa que me desanimava era achar alguém que explicasse bem esses aspectos, pois a parte técnica é bem documentada e há infinitos tutoriais né.

Aprender a testar se um *endpoint* está retornando status 200 é fácil. Difícil é entender o motivo e quando fazer esse teste.

Por estar apenas começando, me sinto muito improdutivo ainda. Tem horas que eu olho o que fiz e penso: se não estivesse testando, já teria feito tantas outras funcionalidades.

Testes são divididos basicamente em três fases:
## Arrange
*Arrange* ou arranjo, é a primeira fase, quando você prepara o ambiente com as coisas necessárias para que o teste possa ser realizado.

Geralmente envolve criar variáveis com dados básicos que reflitam algo do banco de dados, como por exemplo criar um usuário qualquer.

## Act
*Act* ou agir, é a segunda fase, onde você vai orientar que ações e operações o teste deve realizar para no fim testar de fato se as coisas aconteceram como deveriam. 

Um exemplo é acessar uma url.

## Assert 
Aqui finalmente vamos testar se as coisas foram feitas corretamente. Para isso, fazemos **afirmações** (assert).

E aqui é onde está o pulo do gato. O que devemos testar?

## Vamos a um exemplo simples: 

Testar se um usuário logado pode excluir um post.

### Arrange

Como queremos testar se um usuário **logado** pode excluir um post, a primeira coisa é criar um usuário.

```php
$user = User::factory()->create();
```

Logo, para excluir um post, é preciso ter um post, e cujo dono seja o usuário que acabamos de criar.

```php
$post = Post::factory()->create(['user_id' => $user->id]);
```

Agora temos o que precisa pra começar a agir.

### Act

A ação que queremos testar é excluir um post. Vamos então pedir ao teste para acessar o *endpoint* passando o post que queremos excluir.

Lembrando que queremos testar se **um usuário logado** pode excluir um post. Precisamos incluir isso na hora de agir.

```php
$response = $this->actingAs($user)->delete("/posts/{$post->id}");
```

Aqui usamos o `actingAs($user)` (agir como se fosse o usuário que criamos), caso contrário estaríamos testando como se fosse um "desconhecido" ou usuário não logado.

### Assert

Chegamos finalmente na parte final. Aqui vamos propriamente testar e confirmar o funcionamento. Mas como?

Bom a primeira coisa que precisamos saber é se o post foi deletado. Pra isso basta contarmos quantos posts tem atualmente na tabela e comparar com zero.
```php
$this->assertEquals(0, Post::count());
```

Além disso, podemos testar que após o post ser excluído, seremos redirecionado para a página com a listagem de posts.
```php
$response->assertRedirect('/posts');
```

Tudo parece bem intuitivo, né? E é. 

1. Cria um usuário
2. Cria um post para este usuário
3. Acessa a página de excluir posts, passando o usuário
4. Confere se foi excluído
5. Confere se foi redirecionado

Mas falta um detalhe que passa despercebido para os iniciantes. E se o post **sequer foi criado?**

Na hora de comparar se há *zero* posts na tabela, o teste vai passar, concorda?

O que precisamos fazer pra que o teste fique mais confiável?

Vamos mudar um pouco a estrutura básica *Arrange, Act, Assert* e trazer um *Assert* para antes do *Act*.

Antes de acessar a página de exclusão, vamos conferir se de fato existe um post na tabela.

```php
$this->assertEquals(1, Post::count());
```

O código completo fica da seguinte forma:
```php
public function test_users_can_delete_their_posts()
{
	$user = User::factory()->create();
	$post = Post::factory()->create(['user_id' => $user->id]);

	$this->assertEquals(1, Post::count());

	$response = $this->actingAs($user)->delete("/posts/{$post->id}");

	$this->assertEquals(0, Post::count());
	$response->assertRedirect('/posts');
}
```

Tenho gostado de aprender testes. Tem horas que parece um joguinho que você mesmo cria um desafio para testar "passar de fase".

Além disso, estou aproveitando pra desenvolver um projeto pessoal pra controlar minhas finanças (que eu fazia no Excel). Se quiser conferir o andamento veja o [repositório no GitHub](https://github.com/rafaelmfreire/kostis) ou a [página do projeto aqui no meu site](/projetos/kostis).