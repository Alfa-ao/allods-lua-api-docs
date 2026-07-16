# avatar.SetRitualActivePreset
Устанавливает активный набор ритуальных вещей.

## Описание
```lua
avatar.SetRitualActivePreset( preset: number )
```
Функция устанавливает активный набор ритуальных вещей. При успешном изменении набора приходит событие `EVENT_EQUIPMENT_ACTIVE_PRESET_CHANGED`.

::: warning Замечание
В пользовательских аддонах метод работает исключительно в обработчиках реакции на действия мыши, например, при нажатии кнопки.
:::

## Список параметров
- **`preset`** (`number`)
Набор ритуальных вещей. Значение задается константами перечисления `DUMMY_TYPE`.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Установка вторичного набора ритуальных вещей
```lua
avatar.SetRitualActivePreset( DUMMY_TYPE_SECONDARY )
```

## Смотрите также
- [EVENT_EQUIPMENT_ACTIVE_PRESET_CHANGED](events#event-equipment-active-preset-changed)