# avatar.SetClassChangerInfo
Отправляет на сервер информацию, необходимую для продолжения процесса смены класса.

## Описание
```lua
avatar.SetClassChangerInfo( changeList: table )
```
Функция отправляет на сервер набор замен для предметов и самоцветов. Для успешного выполнения операции необходимо указать замены для всех элементов, информация о которых содержится в данных, полученных через `avatar.GetClassChangerInfo()`. Результат выполнения операции передается через событие `EVENT_CHARACTER_CLASS_CHANGER_CHANGED`.

## Список параметров
- **`changeList`** (`table`)
Список идентификаторов (`ObjectId`) предметов и самоцветов, выбранных для замены несовместимых с новым классом элементов. Значения должны быть взяты из данных, полученных через `avatar.GetClassChangerInfo()`. Из каждого списка `itemSubstitutions` второго уровня вложенности допускается указание только одного `substItemId`, аналогичное правило применяется для `oneOfEnchantSubstitution`. Порядок следования элементов не имеет значения. Замена не будет произведена, если не указаны замены для всех предметов и самоцветов.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Отправка списка замен для смены класса
```lua
avatar.SetClassChangerInfo( { itemId1, itemId2, enchantId1, enchantId2, itemId3 } )
```

## Смотрите также
- [avatar.GetClassChangerInfo](avatar.GetClassChangerInfo)
- [EVENT_CHARACTER_CLASS_CHANGER_CHANGED](events.character#event-character-class-changer-changed)