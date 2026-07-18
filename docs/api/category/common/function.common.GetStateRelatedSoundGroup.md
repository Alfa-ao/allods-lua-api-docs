# common.GetStateRelatedSoundGroup
Возвращает группу связанных с состоянием звуковых ресурсов.

## Описание
```lua
common.GetStateRelatedSoundGroup( sysGroup: string, optional: ?boolean ): RelatedSoundsLua | nil
```
Функция извлекает и возвращает группу связанных с состоянием звуковых ресурсов, представляющую собой userdata (`RelatedSoundsLua`). 

::: warning Замечание
В режиме без звука функция возвращает `nil`.
:::

## Список параметров
- **`sysGroup`** (`string`)
Идентификатор искомой группы звуковых ресурсов.

- **`optional`** (`boolean` | `nil`)
Флаг, определяющий поведение при отсутствии искомой группы. Если передано значение `true`, отсутствие группы не считается ошибкой. По умолчанию принимает значение `false`.

## Возвращаемые значения
Возвращает `RelatedSoundsLua` — группу звуковых ресурсов, или `nil`, если группа не найдена либо функция вызвана в режиме без звука.

## Примеры
### Получение группы звуков по идентификатору
```lua
local group = common.GetStateRelatedSoundGroup( "TestGroup" )
```

## Смотрите также
- [RelatedSoundsLua](RelatedSoundsLua)