# matchMaking.CanJoinInstancedEventById

Проверяет возможность вставания аватара в очередь на инстанс-ивент по идентификатору ресурса.

## Описание

::: danger VERSION: [<Badge type="warning" text="17.0.01.43" />](/index.md#17.0.0-matchMaking.CanJoinInstancedEvent)

Функция удалена.

```lua
matchMaking.CanJoinInstancedEventById( eventResourceId: InstancedEventResourceId ): boolean
```
:::

Функция возвращает `true`, если аватар может встать в очередь на инстанс-ивент (не приглашён и не участвует в нём), иначе `false`.

## Список параметров

- **`eventResourceId`** (`InstancedEventResourceId`) - Идентификатор ресурса соответствующего инстанс-ивента.

## Возвращаемые значения

Возвращает `boolean` - `true`, если аватар может встать в очередь на инстанс-ивент, иначе `false`.