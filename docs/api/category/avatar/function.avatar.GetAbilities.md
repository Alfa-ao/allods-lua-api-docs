# avatar.GetAbilities
Возвращает список идентификаторов пассивных умений.

## Описание

```lua
avatar.GetAbilities(): table
```

Формирует и возвращает таблицу, содержащую идентификаторы (`AbilityId`) пассивных умений. Возвращаемая таблица индексирована с единицы. Для получения списка активных умений и заклинаний применяется функция `avatar.GetSpellBook()`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения
`table` - таблица идентификаторов пассивных умений (`AbilityId`), индексированная с 1.

## Примеры

### Перебор пассивных умений и получение их названий
```lua
local abilities = avatar.GetAbilities()
for i, id in pairs( abilities ) do
  local abilityInfo = avatar.GetAbilityInfo( id )
  local name = abilityInfo.name
end
```

## Смотрите также

- [avatar.GetSpellBook](/api/category/avatar/function.avatar.GetSpellBook.md)
- [avatar.GetAbilityInfo](/api/category/avatar/function.avatar.GetAbilityInfo.md)