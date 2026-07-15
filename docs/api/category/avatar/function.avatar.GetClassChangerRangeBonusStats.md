# avatar.GetClassChangerRangeBonusStats

Рассчитывает сумму бонусов дистанционного оружия из списка замен предметов при смене класса.

## Описание

```lua
avatar.GetClassChangerRangeBonusStats( changeList: table ): table | nil
```

Функция рассчитывает сумму бонусов, предоставляемых дистанционным оружием, выбранным для замены экипировки на соответствующей стадии процесса смены класса. Входные данные аналогичны параметрам функции `avatar.SetClassChangerInfo`, однако набор замен не обязательно должен быть полным. Возвращает таблицу с информацией о бонусах предмета из слота `DRESS_SLOT_RANGED`, аналогичную структуре, возвращаемой функцией `itemLib.GetBonus`, или `nil` в случае возникновения ошибок. Состояние процесса смены класса, изменяемое при передаче события `EVENT_CHARACTER_CLASS_CHANGER_CHANGED`, при этом остаётся неизменным.

## Список параметров

- **`changeList`** (`table`)
Список идентификаторов (`ObjectId`) предметов и самоцветов, выбранных на замену имеющимся у аватара и несовместимых с новым классом. Должны быть выбраны из данных, полученных функцией `avatar.GetClassChangerInfo` (из каждого списка `itemSubstitutions` второго уровня вложенности можно указать только один `substItemId`, аналогично для `oneOfEnchantSubstitution`). Порядок следования не важен.

## Возвращаемые значения

Возвращает таблицу (`table`) с информацией о бонусах предмета или `nil` в случае ошибок. Структура таблицы аналогична возвращаемому значению функции `itemLib.GetBonus`.

## Примеры

### Расчет бонусов для списка замен

```lua
local changeList = { itemId1, itemId2, enchantId1, enchantId2, itemId3 }
local bonus = avatar.GetClassChangerRangeBonusStats( changeList )
if bonus then
  local power = bonus.miscStats.power.effective
end
```

## Смотрите также

- `itemLib.GetBonus`
- `avatar.SetClassChangerInfo`
- `avatar.GetClassChangerInfo`
- `EVENT_CHARACTER_CLASS_CHANGER_CHANGED`
- `avatar.GetClassChangerBonusStats`
- `DRESS_SLOT_RANGED`