# group.GetMemberInfoByIndex

Извлекает информацию о члене группы по указанному индексу.

## Описание

```lua
group.GetMemberInfoByIndex( index: number ): table|nil
```

Функция извлекает и возвращает таблицу с информацией о персонаже из группы по заданному индексу. Индекс главного персонажа (аватара) всегда равен 1. Если информация отсутствует или слот пуст, функция возвращает `nil`. Структура возвращаемой таблицы идентична структуре, возвращаемой функцией `group.GetMemberInfo`.

## Список параметров

- **`index`** (`number`) - Индекс игрока в группе. Допустимые значения находятся в диапазоне от `1` до `6`.

## Возвращаемые значения

Возвращает `table` или `nil` - `nil`, если информация отсутствует или указанный слот пуст; иначе таблица с информацией о персонаже из группы, поля которой идентичны `group.GetMemberInfo`.

## Примеры

### Получение информации о втором члене группы

```lua
local memberInfo = group.GetMemberInfoByIndex( 2 )
```

## Смотрите также

- [GROUP_MEMBER_STATE_...](/api/enums/group_member_state)
- [raid.GetMemberInfo](/api/category/raid/function.raid.GetMemberInfo)
- [group.GetMembers](/api/category/group/function.group.GetMembers)