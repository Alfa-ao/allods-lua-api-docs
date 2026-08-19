# matchMaking.CanJoinInstancedEvents

Проверяет возможность вставания аватара в очередь на инстанс-ивент.

## Описание

::: danger VERSION: [<Badge type="warning" text="17.0.01.43" />](/index.md#17.0.0-matchMaking.CanJoinInstancedEvent)

Функция удалена.

```lua
matchMaking.CanJoinInstancedEvents( eventId: ObjectId|nil ): boolean
```
:::

Функция возвращает `true`, если аватар может встать в очередь на инстанс-ивент (не приглашён и не участвует в нём), иначе `false`.

## Список параметров

- **`eventId`** (`ObjectId` | `nil`) - Идентификатор инстанс-ивента для проверки возможности вставания на конкретный инстанс-ивент, или `nil` для общей проверки.

## Возвращаемые значения

Возвращает `boolean` - `true`, если аватар может встать в очередь на инстанс-ивент, иначе `false`.