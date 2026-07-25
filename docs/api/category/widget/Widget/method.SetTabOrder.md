# WidgetSafe:SetTabOrder

Устанавливает порядок обхода виджетов по нажатию клавиши Tab.

## Описание

```lua
WidgetSafe:SetTabOrder( tabOrder: number )
```

Функция устанавливает приоритет обхода виджетов при навигации с помощью клавиши Tab.

## Список параметров

- **`tabOrder`** (`number`) - Приоритет обхода. По умолчанию: 0.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка порядка обхода

```lua
wtElement:SetTabOrder( 1 )
```

## Смотрите также

- [WidgetSafe:GetTabOrder](method.GetTabOrder)