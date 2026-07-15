# avatar.GetClassChangerBonusStats

Рассчитывает сумму бонусов, даваемых предметами, выбранными для замены экипировки при смене класса.

## Описание

```lua
avatar.GetClassChangerBonusStats( changeList: table ): table | nil
```

Функция рассчитывает и возвращает суммарные бонусы от списка предметов и самоцветов, выбранных для замены несовместимой экипировки при смене класса. Входные параметры аналогичны `avatar.SetClassChangerInfo`, однако набор замен не обязан быть полным. Возвращаемая таблица имеет структуру, аналогичную `itemLib.GetBonus`. Состояние процесса смены класса при вызове функции не изменяется.

## Список параметров

- **`changeList`** (`table`)
Список `ObjectId` предметов (вещей и самоцветов), выбранных на замену имеющимся у аватара и не совместимых с новым классом. Должны быть выбраны из данных, полученных `avatar.GetClassChangerInfo()` (из каждого списка `itemSubstitutions` второго уровня вложенности можно указать только один `substItemId`, аналогично для `oneOfEnchantSubstitution`). Порядок следования не важен.

## Возвращаемые значения

Возвращает `table` с суммарными бонусами (структура аналогична возвращаемому значению `itemLib.GetBonus`) или `nil`.

## Примеры

### Расчет суммарных бонусов от замен

```lua
local bonus = avatar.GetClassChangerBonusStats( { itemId1, itemId2, enchantId1, enchantId2, itemId3 } )
if bonus then
    local power = bonus.miscStats.power.effective
end
```

## Смотрите также

- [itemLib.GetBonus](#)
- [avatar.SetClassChangerInfo](#)
- [avatar.GetClassChangerInfo](#)
- [EVENT_CHARACTER_CLASS_CHANGER_CHANGED](#)
- [avatar.GetClassChangerRangeBonusStats](#)