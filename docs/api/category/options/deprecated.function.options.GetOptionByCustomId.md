# options.GetOptionByCustomId

Возвращает идентификатор пользовательской опции по её текстовому идентификатору из базы.

## Описание

::: danger Deprecated

VERSION: [<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-options.GetOptionsByCustom) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-options.GetOptionsByCustom) <Badge type="warning" text="Process" />

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