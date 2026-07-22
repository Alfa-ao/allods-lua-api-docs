# matchMaking.AwayBattleEvent
Инициирует отлучение из инстанс-ивента с сохранением членства в рейде или группе.

## Описание
```lua
matchMaking.AwayBattleEvent()
```
Функция инициирует отлучение из инстанс-ивента с сохранением членства в рейде или группе. Перед вызовом требуется проверить доступность операции с помощью функции `matchMaking.CanAwayBattleEvent`.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Проверка и выполнение отлучения
```lua
if matchMaking.CanAwayBattleEvent() then
    matchMaking.AwayBattleEvent()
end
```

## Смотрите также
- [matchMaking.CanAwayBattleEvent](function.matchMaking.CanAwayBattleEvent)