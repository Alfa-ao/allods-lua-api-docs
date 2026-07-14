# avatar.ChangeFairyBonus
Привязывает бонус от покровителя к заданной характеристике.

## Описание
```lua
avatar.ChangeFairyBonus( statIndex: number )
```
Бонус от покровителя привязывается к характеристике, индекс которой передан в качестве параметра. Указанная характеристика обязана присутствовать в списке характеристик, к которым в данный момент разрешено привязывать бонус. Список доступных характеристик извлекается через функцию `avatar.GetStatsBonusesPart()` из поля `fairyBonus.allowedStats`.

::: warning Замечание
Попытка привязать бонус к характеристике, отсутствующей в списке `fairyBonus.allowedStats`, может привести к ошибке выполнения или игнорированию запроса со стороны сервера.
:::

## Список параметров
- **`statIndex`** (`number`)
Индекс характеристики из таблицы `fairyBonus.allowedStats`, к которой необходимо привязать бонус.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Привязка бонуса к первой доступной характеристике
```lua
local allowedStats = avatar.GetStatsBonusesPart().fairyBonus.allowedStats
if allowedStats and allowedStats[1] then
  avatar.ChangeFairyBonus( 1 )
end
```

## Смотрите также

- `avatar.GetStatsBonusesPart()`