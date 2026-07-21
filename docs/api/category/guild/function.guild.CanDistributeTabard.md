# guild.CanDistributeTabard
Проверяет возможность выдачи знака отличия в награду члену гильдии главного игрока.

## Описание
```lua
guild.CanDistributeTabard( memberId: ObjectId ): boolean
```
Функция проверяет, разрешено ли выдавать знак отличия указанному члену гильдии. Возвращает логическое значение, подтверждающее или отрицающее возможность данной операции.

## Список параметров
- **`memberId`** (`ObjectId`) - Идентификатор члена гильдии.

## Возвращаемые значения
Возвращает `boolean` - `true`, если разрешено выдавать знак отличия, и `false` в противном случае.

## Примеры
### Проверка и выдача знака отличия
```lua
if guild.CanDistributeTabard( memberId ) then
    guild.DistributeTabard( memberId, ENUM_TabardType_Champion )
end
```

::: info Описание примера
В примере сначала проверяется возможность выдачи знака отличия. Если проверка успешна, вызывается функция выдачи награды с указанием типа знака отличия.
:::

## Смотрите также
- [guild.DistributeTabard](function.guild.DistributeTabard)
- [ENUM_TabardType_Champion](../constants#enum-tabardtype-champion)