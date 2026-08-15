# options.GetOptionByCustomId

Возвращает идентификатор пользовательской опции по её текстовому идентификатору из базы.

## Описание

::: danger <Badge type="danger" text="^17.1.*" /> <Badge type="danger" text="^18.0.0" /> <Badge type="warning" text="Process" />

Функция удалена.

```lua
options.GetOptionByCustomId( sysCustomId: string ): ObjectId | nil
```

:::

Функция возвращает идентификатор пользовательской опции по её текстовому идентификатору из базы.

## Список параметров

- **`sysCustomId`** (`string`) - текстовый идентификатор опции

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - идентификатор опции или `nil`, если опция не существует.

## Примеры

```lua
local optionId = options.GetOptionByCustomId( sysCustomId )
```