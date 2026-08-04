# matchMaking.CanAwayBattleEvent
Проверяет, возможно ли отлучиться из инстанс-ивента оставаясь рейде/группе.

## Описание

```lua
matchMaking.CanAwayBattleEvent(): boolean
```

Функция возвращает логическое значение, определяющее, возможно ли отлучиться из инстанс-ивента оставаясь рейде/группе.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если можно отлучиться, иначе `false`.

## Примеры

### Проверка возможности отлучиться
```lua
if matchMaking.CanAwayBattleEvent() then
    matchMaking.AwayBattleEvent()
end
```

## Смотрите также

- [matchMaking.AwayBattleEvent](/api/category/matchMaking/function.matchMaking.AwayBattleEvent.md)