# options.GetOptionIds

Возвращает таблицу с идентификаторами всех опций для указанного блока.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-options.Get...Ids) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-options.Get...Ids) <Badge type="warning" text="Process" />

## Описание

```lua
options.GetOptionIds( blockId: ObjectId ): table
```

Функция возвращает идентификаторы опций, организованных в блоки, которые, в свою очередь, формируют группы и страницы.

## Список параметров

- **`blockId`** (`ObjectId`) - Идентификатор блока.

## Возвращаемые значения

Возвращает `table` - таблица с идентификаторами опций, индексация с 1.

## Примеры

### Получение и перебор идентификаторов опций

```lua
local optionIds = options.GetOptionIds( blockId )
for _, optionId in ipairs( optionIds ) do
    ...
end
```