# matchMaking.CanJoinInstancedEventById

Проверяет, может ли аватар в данный момент в принципе встать в очередь на какой-нибудь инстанс-ивент.

## Описание

```lua
matchMaking.CanJoinInstancedEventById( eventResourceId: InstancedEventResourceId ): boolean
```

Функция проверяет текущее состояние аватара на возможность постановки в очередь инстанс-ивента.

## Список параметров

- **`eventResourceId`** (`InstancedEventResourceId`) - id ресурса соответствующего инстанс-ивента.

## Возвращаемые значения

Возвращает `boolean` - `true`, если аватар в данный момент в принципе в состоянии встать в очередь на какой-нибудь инстанс-ивент (не приглашён, не участвует в инстанс-ивенте), иначе `false`.

## Примеры

### Проверка возможности вступления в очередь

```lua
matchMaking.CanJoinInstancedEventById()
```