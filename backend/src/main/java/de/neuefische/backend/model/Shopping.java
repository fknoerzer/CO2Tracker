package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Shopping {
    @NotNull(message = "Amount of Clothing Items is mandatory")
    private double amountOfClothingItems;

    @NotNull(message = "Amount of Electric Items is mandatory")
    private double amountOfElectronicItems;

    @NotNull(message = "Amount of Souvenir Items is mandatory")
    private double amountOfSouvenirItems;

    private String customShoppingItem;

    @NotNull(message = "Amount of Custom Item Emissions is mandatory")
    private double customShoppingItemEmission;

    @NotNull(message = "Amount of Custom Shopping Items is mandatory")
    private double amountOfCustomShoppingItem;
}