# rules.BillingInfoGetBonusInfo

Возвращает описание указанного бонуса.

## Описание

```lua
rules.BillingInfoGetBonusInfo( bonusId: BillingBonusId ): table|nil
```

Функция возвращает описание указанного бонуса. Если информация отсутствует, возвращается `nil`. В противном случае возвращается таблица с информацией о бонусе.

::: tip информация
`UIState` - расширенная информация, `GameState` - базовая информация
:::

## Список параметров

- **`bonusId`** (`BillingBonusId`) - Идентификатор бонуса, описание которого необходимо получить.

## Возвращаемые значения

Возвращает `table` | `nil` - описание о таблице:

- **`name`** (`WString`) - Название бонуса.

- **`description`** (`WString`) - Текстовое описание бонуса.

- **`currency`** (`string`(`ENUM_ItemMallCurrency_*`)) - Валюта ItemMall-а.

- **`limitTotal`** (`number`) - Верхний предел бонуса.

- **`bonusPercent`** (`number`) - Бонусный процент.

- **`isSinglePayment`** (`boolean`) - Флаг, указывающий, что бонус прекращает действие после первого же платежа, не дожидаясь достижения `limitTotal`.

- **`limitUnused`** (`number` | `nil`) - Неиспользованный остаток бонуса. Возвращает `nil`, если информации нет.

- **`loyalPart`** (`number`) - Часть бонуса от лояльности.

- **`updateTime`** (`table` | `nil`) - Время последнего изменения информации. Возвращает `nil`, если нет информации. Таблица содержит следующие поля:

    - **`year`** (`number`) - Год.

    - **`month`** (`number`(`ENUM_Month_*`)) - Месяц (1-12, начиная с января).

    - **`day`** (`number`) - День месяца.

    - **`wday`** (`number`) - День недели (1-7, начиная с воскресенья).

    - **`hour`** (`number`) - Час.

    - **`minute`** (`number`) - Минута.

    - **`second`** (`number`) - Секунда.

    - **`msec`** (`number`) - Миллисекунда.

- **`removeTime`** (`table` | `nil`) - Время, когда бонус прекратит действие. Формат аналогичен полю `updateTime`. Возвращает `nil`, если нет информации.

- **`image`** (`TextureId`) - Текстура с иконкой. Доступно только в `UIState`.

## Примеры

### Получение информации о бонусе

```lua
local bonuses = rules.BillingInfoGetBonuses()
local bonusInfo
if bonuses and bonuses[0] then
    bonusInfo = rules.BillingInfoGetBonusInfo( bonuses[0] )
end
```

::: info Описание примера
В примере извлекается список доступных бонусов. При наличии хотя бы одного бонуса в списке, запрашивается подробная информация о первом бонусе с помощью функции `rules.BillingInfoGetBonusInfo`.
:::

## Смотрите также

- [rules.BillingInfoGetBonuses](/api/category/rules/function.rules.BillingInfoGetBonuses.md)
- [rules.BillingInfoUpdate](/api/category/rules/function.rules.BillingInfoUpdate.md)
- ENUM_ItemMallCurrency_* -- deprecated
- [ENUM_Month_*](/api/enums/enums.ENUM_Month.md)