# CurrencyId

Идентификатор альтернативной игровой валюты. Один из типов группы `ResourceId`. (В настоящее время идентификатор альтернативной игровой валюты - идентификатор его ресурса в базе).

Поля, доступные в `CurrencyId:GetInfo()`

```
category: CurrencyCategoryId (ResourceId) - категория
description: WString - описание
sourceDescription: GlossaryId or nil - идентификатор ресурса универсального описателя для источника валюты (при наличии)
hideMaxValue: boolean - скрывать ли максимальное значение
image: TextureId - иконка
isCoupon: boolean - является ли валюта купоном
limitCurrency: CurrencyId (ResourceId) - Другая валюта, содержащее потенциальное количество текущей валюты, которое мы еще можем получить.
maxValue: number (integer) - максимальное количество
name: WString - название
storage: number (enum ENUM_CURRENCY_STORAGE_...) - тип хранилища
sysStorage: string - тип хранилища строкой
sysName: string - системное имя
visualizeMode: number (enum ENUM_CURRENCY_VISUALIZE_MODE_...) - тип визуализации
sysVisualizeMode: string - тип визуализации строкой
```

## Смотрите также

- [ENUM_CURRENCY_STORAGE_*](/api/enums/enums.ENUM_CURRENCY_STORAGE.md)
- [ENUM_CURRENCY_VISUALIZE_MODE_*](/api/enums/enums.ENUM_CURRENCY_VISUALIZE_MODE.md)